# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

when you click each row of customers in dashboard, it redirects to the page like
localhost/user/{user_id}
makes sense?
Felipe
01:12
there are two kinds of users
admin and customer
admins are users whose emails are ending with a certain domain name. for example ***@gmail.com
customers are users whose emails are not ending with a certain domain name.
Felipe
01:14
for example, in this case, outlook mail will be for customers