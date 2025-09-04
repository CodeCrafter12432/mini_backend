import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText,
  TextField, Grid, Card, CardContent, Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from 'react-router-dom';

const CourseDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filterInstructor, setFilterInstructor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:8080/courses/all');
      setCourses(res.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/courses/search?keyword=${searchKeyword}`);
      setCourses(res.data);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  const handleFilter = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/courses/filter?instructor=${filterInstructor}`);
      setCourses(res.data);
    } catch (error) {
      console.error('Filter failed:', error);
    }
  };

  const handleSort = async () => {
    try {
      const res = await axios.get('http://localhost:8080/courses/sort');
      setCourses(res.data);
    } catch (error) {
      console.error('Sort failed:', error);
    }
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Course Dashboard
          </Typography>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            style={{ marginRight: 8 }}
          />
          <Tooltip title="Search">
            <IconButton color="inherit" onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Filter by Instructor"
            value={filterInstructor}
            onChange={(e) => setFilterInstructor(e.target.value)}
            style={{ marginRight: 8 }}
          />
          <Tooltip title="Filter">
            <IconButton color="inherit" onClick={handleFilter}>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Sort">
            <IconButton color="inherit" onClick={handleSort}>
              <SortIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Toolbar /> 

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem button onClick={() => handleNavigation('/create')}>
            <ListItemText primary="Create New Course" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/update')}>
            <ListItemText primary="Update Course" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/take')}>
            <ListItemText primary="Take Course" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/delete')}>
            <ListItemText primary="Delete Course" />
          </ListItem>
        </List>
      </Drawer>

      <Grid container spacing={3} style={{ padding: 24 }}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card elevation={3} style={{ padding: 10 }}>
              <CardContent>
                <Typography variant="h6">{course.courseName}</Typography>
                <Typography variant="body2">Instructor: {course.instructor}</Typography>
                <Typography variant="body2">Course ID: {course.id}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CourseDashboard;
