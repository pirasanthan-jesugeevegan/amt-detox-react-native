import * as React from 'react';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardImage,
} from 'react-native-material-cards';

const FestivalCard = ({ props }) => (
  console.log(props),
  (
    <Card>
      <CardImage source={{ uri: props.card }} title={props.name} />
      <CardTitle title={props.name} subtitle={props.location.short_address} />
      <CardContent
        text={
          props?.min_price === null
            ? 'Join Mail'
            : `From ${props?.min_price?.currency}${props?.min_price?.amount}`
        }
      />
      <CardAction separator={true} inColumn={false}></CardAction>
    </Card>
  )
);

export default FestivalCard;
