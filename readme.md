# Adyen form platforms - Webhook configurations manager

While working with Adyen for platforms, you'll have to setup some webhook configurations. No user interface is provided by Adyen to make it easy, it has to be done manually with HTTP requests. Thus I created a UI that is really simple and helps you to simply see the existing configurations, delete existing ones and to create new ones.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file, at the root of the project (the `.env` file being next to your `docker-compose.yaml` file)

`ADYEN_MARKETPLACE_API_KEY`

## Features

- List your existing webhook (just the Adyen for platform) configurations
- Delete an existing configuration
- Create a new configuration

## Installation

Just type

```sh
make build
make install
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/AlexandreGerault/adyen-platform-configurations-manager
```

Go to the project directory

```bash
  cd adyen-platform-configurations-manager
```

Install dependencies

```bash
  make build
  make install
```

Start the server (don't forget to setup your api key)

```bash
  make up
```
