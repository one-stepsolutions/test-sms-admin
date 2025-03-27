import React, { useState } from "react";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";

const AddInventory = ({ onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        itemName: "",
        category: "",
        quantity: "",
        location: "",
        vendorDetails: "",
        dateOfPurchase: "",
        purchaseAmount: "",
        managedBy: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <Sidebar />
            <Box sx={{ flexGrow: 1, padding: "20px" }}>
                <Topbar />
                <Container sx={{ mt: 10, textAlign: "left" }}>
                    <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "left", ml: 3, mb: 4 }}>
                        Inventory Management
                    </Typography>
                    <SearchBar placeholder="Search Inventory" />

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12}>
                                <TextField fullWidth label="Item Name" InputLabelProps={{ shrink: true }}
                                    name="itemName"
                                    value={formData.itemName}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    label="Category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    type="number"
                                    label="Quantity"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    label="Location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Vendor Details"
                                    name="vendorDetails"
                                    value={formData.vendorDetails}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="date"
                                    label="Date of Purchase"
                                    InputLabelProps={{ shrink: true }}
                                    name="dateOfPurchase"
                                    value={formData.dateOfPurchase}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    type="number"
                                    label="Purchase Amount"
                                    name="purchaseAmount"
                                    value={formData.purchaseAmount}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Managed By"
                                    name="managedBy"
                                    value={formData.managedBy}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                        </Grid>

                        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}>
                            <Button variant="outlined" color="error" onClick={onCancel}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" color="primary">
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default AddInventory;
