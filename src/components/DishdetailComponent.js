/** @format */

import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  BreadcrumbItem,
  Breadcrumb
} from 'reactstrap';
import { Link } from 'react-router-dom';

//code snippet for time set
// {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
function RenderDish({ dish }) {
  console.log('RenderDish');
  return (
    <div>
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  console.log('RenderComments invoked');
  console.log(comments);

  if (comments != null) {
    const lst = comments.map((com) => {
      return (
        <li key={com.id}>
          <div className="row">
            --{com.author},
            {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          }).format(new Date(Date.parse(com.date)))}
          </div>
          <br />
          <div className="row">{com.comment}</div>
          <br />
        </li>
      );
    });
    return <ul className="list-unstyled">{lst}</ul>;
  } else {
    <div></div>;
  }
}

const DishDetail = (props) => {
  console.log('DishDetail comp render invoked');
  if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div class="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default DishDetail;
