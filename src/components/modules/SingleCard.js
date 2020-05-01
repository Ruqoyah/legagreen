import React from 'react';
import { Card, Image } from 'semantic-ui-react'

/**
 *
 * SingleCard Component
 *
 */
const SingleCard = ({ name, type, description, avatar, profileName }) => (
  <Card className="card-container">
    <Card.Content>
      <Card.Header className="card-header">{name}</Card.Header>
      <Card.Meta className="type">{type}</Card.Meta>
      <Card.Description className="card-description">
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <div className="card-profile-wrapper">
      <Image
        className="card-profile-pic"
        size='mini'
        src={avatar}
      />
      </div>
      <Card.Meta className="card-profile-name">{profileName}</Card.Meta>
    </Card.Content>
  </Card>
)

export default SingleCard