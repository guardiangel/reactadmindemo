Day 1:
1.Create App
yarn create react-app . --template typescript

2.Install dependencies
yarn add @mui/material @emotion/react @emotion/styled @mui/x-data-grid @mui/icons-material react-router-dom react-pro-sidebar formik yup @nivo/core @nivo/line @nivo/bar @nivo/geo
yarn add @fullcalendar/react @fullcalendar/core @fullcalendar/daygrid

3.Create folders, import fonts (index.css)

Day 2:
SideBar component

Key Point:
1.Can't put <Link/> component between <MenuItem></MenuItem>, for instance:<MenuItem><Link/></MenuItem>, this will cause "Warning: validateDOMNesting(…): <a> cannot appear as a descendant of <a>" error. The solution is <MenuItem component={<Link to={to} />}></MenuItem>

<html>
    <body>
    </body>
</html>
