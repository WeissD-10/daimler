sorry absolutely no time to develop this test. My current freelance project has lots of troubles

For samples please look up the other projects within the repository

## Build the app, BE is not dockerized yet
get the containers `started docker-compose up -d` 
`npm run be:db:migrate` to migrate db
`npm run be:db:seed` to fill the db with mock data

`nx run server:build` build BE

`npm run start:prod` start BE

and navigate to http://localhost:8080 for the frontend

## Serve the app

docker-compose up -d postgres
`npm run be:db:migrate` to migrate db
`npm run be:db:seed` to fill the db with mock data

To start the development server run `nx serve server`. Open your browser and navigate to http://localhost:3000/api for the swagger.

Frontend isn't finished because i set a timelimit of 4 hours for myself and had to much fun with the BE
Start the Frontend with  `nx serve client` and navigate to http://localhost:4200


## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
