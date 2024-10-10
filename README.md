# Hosting a Create React App on S3 with CloudFront

This project was bootstrapped using [Create React App](https://github.com/facebook/create-react-app) and demonstrates how to host a Single Page Application (SPA) on
AWS S3 with CloudFront integration.

## Project Overview

The goal of this project is to provide a simple template for hosting a React SPA on AWS S3 with CloudFront. While
hosting a static React app is straightforward, using React Router can present challenges due to routing issues in such
environments. This template resolves those issues by offering a ready-to-use deployment solution.

## Prerequisites
To use the `deploy.sh` script, ensure that [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) is installed.

To use the `undeploy.sh` script, ensure that `jq` is in place.

## Available Scripts
### `deploy.sh <SPA name>`
This script automates the deployment of your React app to AWS by creating the necessary infrastructure:
  - S3 Bucket: The app will be stored and served from this bucket.
  - CloudFront Distribution: Acts as a content delivery network (CDN) to provide a globally distributed access point for
  your app.
  - CloudFront Function: Ensures that React Router works correctly by intercepting CloudFront requests.

The script leverages AWS CloudFormation to create and manage these resources. Once the infrastructure is in place, it
builds your React app and uploads the files to the S3 bucket.

### `undeploy.sh <SPA name>`
This script cleans up all the resources created during deployment:

  - Deletes the S3 bucket
  - Removes the CloudFront distribution
  - Deletes the associated function

## CFN deployment script