import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Grid,
} from "@mui/material";

const Orders = () => {
  // Mock Data for Orders
  const ongoingOrders = [
    { id: 1, item: "JavaScript for Beginners", status: "Shipping Soon", price: "$29.99" },
    { id: 2, item: "React Development Essentials", status: "Awaiting Payment", price: "$49.99" },
  ];

  const inProgressOrders = [
    { id: 1, item: "Node.js Advanced Course", status: "Processing", price: "$39.99" },
  ];

  const pastOrders = [
    { id: 1, item: "HTML & CSS Masterclass", date: "2024-12-15", price: "$19.99" },
    { id: 2, item: "Full Stack Web Development", date: "2024-11-30", price: "$79.99" },
  ];

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Orders Section
      </Typography>
      <Typography variant="body1" gutterBottom>
        View and manage your orders here.
      </Typography>

      {/* Ongoing Orders */}
      <Typography variant="h5" gutterBottom sx={{ marginTop: "20px" }}>
        Ongoing Orders
      </Typography>
      {ongoingOrders.length > 0 ? (
        ongoingOrders.map((order) => (
          <Card key={order.id} sx={{ marginBottom: "15px" }}>
            <CardContent>
              <Typography variant="h6">{order.item}</Typography>
              <Typography variant="body2">Status: {order.status}</Typography>
              <Typography variant="body2">Price: {order.price}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body2" color="textSecondary">
          No ongoing orders.
        </Typography>
      )}

      <Divider sx={{ marginY: "20px" }} />

      {/* Orders in Progress */}
      <Typography variant="h5" gutterBottom>
        Orders in Progress
      </Typography>
      {inProgressOrders.length > 0 ? (
        inProgressOrders.map((order) => (
          <Card key={order.id} sx={{ marginBottom: "15px" }}>
            <CardContent>
              <Typography variant="h6">{order.item}</Typography>
              <Typography variant="body2">Status: {order.status}</Typography>
              <Typography variant="body2">Price: {order.price}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body2" color="textSecondary">
          No orders in progress.
        </Typography>
      )}

      <Divider sx={{ marginY: "20px" }} />

      {/* Past Orders */}
      <Typography variant="h5" gutterBottom>
        Past Orders
      </Typography>
      {pastOrders.length > 0 ? (
        pastOrders.map((order) => (
          <Card key={order.id} sx={{ marginBottom: "15px" }}>
            <CardContent>
              <Typography variant="h6">{order.item}</Typography>
              <Typography variant="body2">Date: {order.date}</Typography>
              <Typography variant="body2">Price: {order.price}</Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body2" color="textSecondary">
          No past orders.
        </Typography>
      )}
    </Box>
  );
};

export default Orders;
