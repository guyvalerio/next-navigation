.PHONY: build

clean:
	git clean -fxd

install:
	npm install origami-build-tools
	origami-build-tools install

test:
	nbt verify --skip-layout-checks

build:
	nbt build

watch:
	origami-build-tools demo --local --watch

run:
	origami-build-tools demo --local
