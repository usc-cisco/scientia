<h1 align="center">
    <img alt="USC CISCO Scientia" src="./assets/demo.gif"> </img>
</h1>

<p align="center">
  <i>A repository of notes & resources for the different courses offered in USC DCISM.</i><br>
  <i>Built with <a href="https://vitepress.dev/">Vitepress</a> + <a href="https://www.typescriptlang.org/">TypeScript</a> and deployed  @ <a href="usc-cisco.github.io/scientia/">usc-cisco.github.io/scientia</a>.</i>
</p>

<h5 align="center">
  <a href="https://github.com/usc-cisco/scientia/deployments">
    <img src="https://github.com/usc-cisco/scientia/actions/workflows/deploy.yml/badge.svg" alt="deployment status" style="height: 20px;">
  </a>
  <br>
  <br>
  <a href="https://github.com/usc-cisco/scientia/stargazers"><img src="https://img.shields.io/github/stars/usc-cisco/scientia" alt="Stars Badge"/></a>
  <a href="https://github.com/usc-cisco/scientia/network/members"><img src="https://img.shields.io/github/forks/usc-cisco/scientia" alt="Forks Badge"/></a>
  <a href="https://github.com/usc-cisco/scientia/pulls"><img src="https://img.shields.io/github/issues-pr/usc-cisco/scientia" alt="Pull Requests Badge"/></a>
  <a href="https://github.com/usc-cisco/scientia/issues"><img src="https://img.shields.io/github/issues/usc-cisco/scientia" alt="Issues Badge"/></a>
  <a href="https://github.com/usc-cisco/scientia/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/usc-cisco/scientia?color=2b9348"></a>
  <a href="https://github.com/usc-cisco/scientia/blob/master/LICENSE"><img src="https://img.shields.io/github/license/usc-cisco/scientia?color=2b9348" alt="License Badge"/></a>
</h5>

## Deplying to DCISM Servers

After running the commands below, it should serve the files in the root directory of the subdomain `scientia.dcism.org`:

```bash
ssh s${ID_NUMBER}@dcism.org -p 22077
cd scientia.dcism.org
git clone origin https://github.com/usc-cisco/scientia.git .
chmod u+x dcism.sh
./dcism.sh
```

To update the server manually, run the script to automatically delete old files & pull changes before building the static files again:

```bash
ssh s${ID_NUMBER}@dcism.org -p 22077
cd scientia.dcism.org
./dcism.sh
```

To setup a cron job to update it automatically, use the following line of code:

```bash
# updates every 00:00 (Server Time)
* 0 * * * cd /data/users/s${ID_NUMBER}/scientia.dcism.org && /bin/bash /data/users/s${ID_NUMBER}/scientia.dcism.org/dcism.sh
```

## Contributing

We'd love your help in improving the website with your own content & fixes. Here are some ways you can help:

- Before doing anything, read our [Code of Conduct](https://github.com/usc-cisco/scientia/blob/main/.github/CODE_OF_CONDUCT.md).
- Read our [Contributing guidelines](https://github.com/usc-cisco/scientia/blob/main/.github/CONTRIBUTING.md) for making a pull request to edit the repository yourself.
- [Raise issues](https://github.com/usc-cisco/scientia/issues/new/choose) to; correct wrong or misleading content, request more notes, or to fix broken links or outdated resources.
- [Fork the repository](https://github.com/usc-cisco/scientia/fork) and work on changes on your local machine.

### Resource Requests or Bug Reports

[Create an issue](https://github.com/usc-cisco/scientia/issues/new/choose) while following the specific templates.

## Credits

Thank you to all the students who contributed to this project! Your efforts will carry on through generations through this repository.

<a href="https://github.com/usc-cisco/scientia/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=usc-cisco/scientia" />
</a>
