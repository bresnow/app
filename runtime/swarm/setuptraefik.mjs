#!/usr/bin/env zx

await $`docker network create --driver=overlay traefik-public`
await $`docker node update --label-add traefik-public.traefik-public-certificates=true $(docker info -f '{{.Swarm.NodeID}}')`
// await $`export EMAIL=admin@example.com`
// await $`export DOMAIN=traefik.sys.example.com`
// `export USERNAME=admin`
// `export PASSWORD=changethis`
// `export HASHED_PASSWORD=$(openssl passwd -apr1 $PASSWORD)`
await $`docker stack deploy -c ./runtime/swarm/traefik.yml traefik_dash`