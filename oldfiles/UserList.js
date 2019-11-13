import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./UserList.css";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Paper,
  TableSortLabel
} from "@material-ui/core";

const styles = theme => ({
  root: {
    maxWidth: 700,
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    margin: "auto"
  },
  table: {
    minWidth: 700
  }
});

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: "asc",
      orderBy: "name",
      page: 0,
      rowsPerPage: 10
    };
  }

  handleSortRequest = property => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  

  render() {
    const { order, orderBy } = this.state;
    return (
      <Query
        query={gql`
          {
            User{
              id
              name
              reviews_written(orderBy: id_asc){
                id
                stars
                reviewReceiver{
                  name
                }
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          return (
            <Paper className={this.props.classes.root}>
              <Table className={this.props.classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      key="name"
                      sortDirection={orderBy === "name" ? order : false}
                    >
                      <Tooltip
                        title="Sort"
                        placement="bottom-end"
                        enterDelay={300}
                      >
                        <TableSortLabel
                          active={orderBy === "name"}
                          direction={order}
                          onClick={() => this.handleSortRequest("name")}
                        >
                          Review Written By
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell
                      key="avgStars"
                      sortDirection={orderBy === "avgStars" ? order : false}
                      numeric
                    >
                      <Tooltip
                        title="Sort"
                        placement="bottom-start"
                        enterDelay={300}
                      >
                        <TableSortLabel
                          active={orderBy === "avgStars"}
                          direction={order}
                          onClick={() => this.handleSortRequest("avgStars")}
                        >
                          Star Rating
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell
                      key="numReviews"
                      sortDirection={orderBy === "numReviews" ? order : false}
                      numeric
                    >
                      <Tooltip
                        title="Sort"
                        placement="bottom-start"
                        enterDelay={300}
                      >
                        <TableSortLabel
                          active={orderBy === "numReviews"}
                          direction={order}
                          onClick={() => this.handleSortRequest("numReviews")}
                        >
                          Person Reviewed
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.User.map(n => {
                    return (
                      <TableRow key={n.id}>
                        <TableCell>{n.name}</TableCell>
                        <TableCell>{n.reviews_written[0].stars}</TableCell>
                        <TableCell>{n.reviews_written[0].reviewReceiver.name}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(UserList);
