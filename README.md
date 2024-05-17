# Forge SEQ test app

This app provides interfaces that let Confluence users:

1. Input a teammate's nickname and a corresponding full name.
2. Query a nickname by a matching full name. 

Both interfaces are presented in separate tabs.

This is an unfinished app, and does not provide any capabilities for saving
or processing submitted inputs. 

## Before you begin

This is a Forge app. As such, you'll need to set up your development environment before
you can start testing and updating it.

1. First, install Node. Refer to the following pages for instructions specific to your O/S:
    - [Apple macOS](https://developer.atlassian.com/platform/forge/installing-forge-on-macos)
    - [Linux](https://developer.atlassian.com/platform/forge/installing-forge-on-linux)
    - [Windows 10](https://developer.atlassian.com/platform/forge/installing-forge-on-windows)
2. [Install the Forge CLI](https://developer.atlassian.com/platform/forge/getting-started/#install-the-forge-cli).
3. [Log in with an Atlassian API token](https://developer.atlassian.com/platform/forge/getting-started/#log-in-with-an-atlassian-api-token).

### Set up cloud developer site

You'll also need to have a Confluence developer site to test on (it's free!).
If you don't have one yet, set it up now:

1. Go to http://go.atlassian.com/cloud-dev and create a site using the email address associated with your Atlassian account.
2. Once your site is ready, log in and complete the setup wizard.


## App setup details

After setting up your development environment, you can now start testing the app.

1. Clone this repository.
2. From the root of this repository, run `forge register <new name>`. This will register the app under your Atlassian developer account.
3. Install all the necessary Node modules with `npm install`.
4. Deploy the app with `forge deploy`.
5. Install the app with `forge install`. When asked to select a product, choose `Confluence`. You'll also be asked to supply your site's URL.
6. Create a page on your Confluence site.
7. Add the app on the created page like a normal macro.


## References

- CLI
    - [register](https://developer.atlassian.com/platform/forge/cli-reference/register/)
    - [deploy](https://developer.atlassian.com/platform/forge/cli-reference/deploy/)
    - [install](https://developer.atlassian.com/platform/forge/cli-reference/install/)
- Forge UI
    - [Component: Tabs](https://developer.atlassian.com/platform/forge/ui-kit/components/tabs/)
    - [Component: Form](https://developer.atlassian.com/platform/forge/ui-kit/components/form/)
    - [Hook: Use form](https://developer.atlassian.com/platform/forge/ui-kit/hooks/use-form/)
