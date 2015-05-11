.PHONY: build

clean:
	git clean -fxd

install:
	npm install origami-build-tools
	origami-build-tools install
test:
	origami-build-tools verify
build:
	origami-build-tools build

watch:
	origami-build-tools demo --local --watch

run:
	origami-build-tools demo --local
