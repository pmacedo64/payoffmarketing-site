#!/bin/bash
cd "/Users/pedromacedo/Library/Mobile Documents/com~apple~CloudDocs/CLAUDE/Elo/Elo"
git add .
git commit -m "update $(date '+%Y-%m-%d %H:%M')"
git push
echo "✓ Deploy enviado para Netlify"
