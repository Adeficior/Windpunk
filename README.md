# Windpunk Modpack

Uses [@adeficior/assembler](https://github.com/Adeficior/Assembler)

## Setup

Before working on the modpack, or after making changes to the included mods,
make sure to run `bun run download` once to download the mods into the assembler cache.

After changing the installed mods, you may also want to re-generate the dump files using `bun run dump`,
will will spin up a server and execute the `dump registry` command.

## File Structure

### `pack`

Contains the [Packwiz](https://packwiz.infra.link/) pack files.

### `gen`

Contains datagen modules that are using [@adeficior/data-modifier](https://github.com/Adeficior/DataModifier).

### `resources`

static resources that will be included in the pack as a data- or resourcepack

### `assets`

icons, logos and other modpack branding

### `dump`

Contains the registriy entries exported using [Registry Dump](https://modrinth.com/mod/registry-dump).
These are used by the data generation to validate used registry ids and to provide typescript safety.

### `.assembler`

Cache directory for everything related to [@adeficior/assembler](https://github.com/Adeficior/Assembler)
