.PHONY: build

install:
	npm install origami-build-tools
	obt install

test:
	gulp test
	nbt verify --skip-layout-checks

build:
	gulp build

demo:
	gulp build
	obt demo --local --watch
