terraform {
  required_providers {
    heroku = {
      source = "heroku/heroku"
      version = "4.2.0"
    }
  }
}

provider "heroku" {
  email = var.email_adress
  api_key = var.heroku_api_key
}

resource "heroku_app" "app_staging" {
  name = "chatroom-back-staging"
  region = "eu"
}