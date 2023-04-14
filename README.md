# deep-email-scan
scan for exposed emails in a github profile.

## Creating a Personal Access Token

Go to https://github.com/settings/personal-access-tokens/new and create a new token. (Feel free to give it as little access as possible, it only needs to be able to read public repos.)

## Running the script

```sh
GITHUB_TOKEN=your_token_here deno run --allow-read --allow-env=GITHUB_TOKEN,HOME --allow-net=api.github.com https://...
```

> **Warning:** This script, depending on the user's size, takes quite a bit of tokens.