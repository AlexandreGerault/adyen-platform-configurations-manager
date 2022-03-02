CURRENT_UID := $(shell id -u)
CURRENT_GID := $(shell id -g)

DIR=$(shell pwd)

#-----------------------------------------------------------
##@ # Preparation commands
#-----------------------------------------------------------
install-front: ## Install yarn dependencies for React app
	docker run --rm  \
	-w /usr/src/apps/front \
	-v "${DIR}/apps/front:/usr/src/apps/front" \
	-u ${CURRENT_UID}:${CURRENT_GID} \
	node:alpine sh -c "yarn install"

install-back: ## Install yarn dependencies for Adonis app
	docker run --rm  \
	-w /usr/src/apps/back \
	-v "${DIR}/apps/back:/usr/src/apps/back" \
	-u ${CURRENT_UID}:${CURRENT_GID} \
	node:alpine sh -c "yarn install"

build: ## Build docker images
	docker-compose build --no-cache

install: install-front install-back ## Install yarn dependencies for React and Adonis

#-----------------------------------------------------------
##@ # Stack commands
#-----------------------------------------------------------
up: ## Starts the project stack
	docker-compose up -d

down: ## Stop the project stack
	@docker-compose down

.DEFAULT_GOAL := help
.PHONY: help
help: ## Display help
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make <command> \033[36m\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
