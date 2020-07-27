# CES Help PoC

## Purpose
This proof of concept has been implemented to evaluate using gatsby's quick and easy static site generator to deliver support pages and sites for upcoming CES projects. 

Help content are written in markdown files ( one markdown file for a page)  and then deployed to an S3 bucket. S3's static web hosting feature is being leveraged to serve the generated site. 

### Next Steps 
Evaluate the value of using AWS cloudfront as part of the static website stack to improve performance 
Evaluate if the source markdowns can be consumed from an S3 bucket directly as opposed to the source code



## Installation Instructions 
1. Clone this repository
2. Add/Update Markdown files in the ./src/pages directory 
3. At the command prompt type `npm run build` then `npm run deploy` to build and deploy the static site



