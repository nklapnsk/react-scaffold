version=$1

sed -i '' "s/use-node-version=.*/use-node-version=${version}/" .npmrc
echo "${version}" > .nvmrc


