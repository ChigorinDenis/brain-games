install:
	npm install
lint:
	npx eslint .
publish:
	npm publish --dry-run
brain-games:
	node src/bin/brain-progression.js
