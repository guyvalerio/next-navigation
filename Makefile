.PHONY: build

clean:
	git clean -fxd

install:
	npm install origami-build-tools
	origami-build-tools install

test:
	gulp test
	nbt verify --skip-layout-checks

build:
	nbt build

watch:
	obt demo --local --watch

demo:
	obt demo --local
