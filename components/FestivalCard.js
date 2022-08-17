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
      <CardImage
        testID="festical_img"
        source={{ uri: props.card }}
        title={props.name}
      />
      <CardTitle
        title={props.name}
        subtitle={props.location.short_address}
        testID="festical_title"
      />
      <CardContent
        testID="festical_content"
        text={
          props?.min_price === null
            ? 'Join Mail'
            : `From ${props?.min_price?.currency}${props?.min_price?.amount}`
        }
      />
    </Card>
  )
);

export default FestivalCard;
