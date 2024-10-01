# Testing basic setup for nyc test coverage

The goal of this repo was to get test coverage a mono repo with both typescript and javascript files.
We wanted to cover all files, whether they had a test or not, and read from the source files, so the `.ts` files.
The idea being to late upload a coverage xml file for gitlab.

Using this example monorepo I have discovered that the `.nycrc.json` file does not work as expected. Possibly parsed too late.
I have instead got the example to work using just the command line.

## Structure

- pk1: has the mixed .ts and .js files.
- pk2: has just .js files.

### Command to get the coverage output:

So from `./pk1`, run:

```
yarn nyc:coverage
```
