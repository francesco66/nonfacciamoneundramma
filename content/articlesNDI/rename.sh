
for f in *.md2; do
    mv -- "$f" "${f%.md2}.md"
done
