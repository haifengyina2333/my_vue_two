import Vue from 'vue'
import { Button,Input,Form,FormItem,Message,MenuItemGroup,Menu,MenuItem,Submenu,Breadcrumb,BreadcrumbItem,DropdownItem,DropdownMenu,Dropdown } from 'element-ui'
// 提示框
Vue.prototype.$message = Message;

Vue.use(Button)
Vue.use(Input)
Vue.use(Form) 
Vue.use(FormItem) 
Vue.use(MenuItemGroup) 
Vue.use(MenuItem) 
Vue.use(Submenu) 
Vue.use(Menu) 
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(DropdownItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
