set -e
s3_folder=$1
cloudfront_id=$2
profile=$3
ENV=$4

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
rm -Rf public/
rm -Rf node_modules/sharp

echo "Build UI Code"
yarn

if [ -z "$ENV" ]
then
  yarn build
else
  yarn build:$ENV
fi


echo "Put to S3 and clear Cloudfront cache"
aws s3 rm --recursive s3://$s3_folder --profile $profile
aws s3 cp --recursive ./public/ s3://$s3_folder --profile $profile
aws cloudfront create-invalidation --distribution-id $cloudfront_id --paths /index.html
