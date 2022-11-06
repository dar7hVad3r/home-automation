import { AppBar, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from "@mui/material"
import { Menu } from '@mui/icons-material'
import { useState } from 'react';
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navigate = useNavigate()
  const taskList = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Library',
      link: '/books'
    }
  ]

  const handleNav = (link: string) => {
    setDrawerOpen(false)
    navigate(link)
  }

  return (
    <div>
      <AppBar >
        <Toolbar>
          <IconButton >
            <Menu onClick={() => setDrawerOpen(true)} />
          </IconButton>
          <Typography variant="h4">
            Barge's Home
          </Typography>
        </Toolbar>
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} >
          <Box sx={{ width: '200px', textAlign: 'center' }} >
            <List>
              {
                taskList.map(task => (
                  <ListItem>
                    <ListItemButton onClick={() => handleNav(task.link)}>{task.name}</ListItemButton>
                  </ListItem>
                ))
              }
            </List>
          </Box>
        </Drawer>
      </AppBar>
      <br /><br /><br /><br />
    </div >
  )
}

export default Nav