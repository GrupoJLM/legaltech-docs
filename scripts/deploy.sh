#!/usr/bin/env bash
# Build docs + PPTX and sync to S3.
# Usage: ./scripts/deploy.sh

set -euo pipefail

cd "$(dirname "$0")/.."

S3_BUCKET="development-legaltech-docs-site"
AWS_PROFILE="tecnoepec-dev"

echo "→ Installing deps (if needed)..."
if [ ! -d node_modules ]; then
  npm ci
fi

echo "→ Building PowerPoint first (copies to static/downloads/)..."
python3 scripts/build_pptx.py

echo "→ Building Docusaurus site..."
npm run build > /dev/null

echo "→ Syncing to S3..."
aws s3 sync build/ "s3://${S3_BUCKET}/" \
  --delete \
  --profile "${AWS_PROFILE}" \
  --cache-control "no-cache" \
  --exclude "downloads/*"

# Upload pptx separately with correct content-type
if [ -f build/downloads/AltaJuris-Apresentacao.pptx ]; then
  aws s3 cp build/downloads/AltaJuris-Apresentacao.pptx \
    "s3://${S3_BUCKET}/downloads/AltaJuris-Apresentacao.pptx" \
    --profile "${AWS_PROFILE}" \
    --content-type "application/vnd.openxmlformats-officedocument.presentationml.presentation" \
    --cache-control "no-cache"
fi

echo ""
echo "✓ Deploy concluído."
echo ""
echo "URLs:"
echo "  Site:  http://${S3_BUCKET}.s3-website-us-east-1.amazonaws.com"
echo "  PPTX:  http://${S3_BUCKET}.s3-website-us-east-1.amazonaws.com/downloads/AltaJuris-Apresentacao.pptx"
