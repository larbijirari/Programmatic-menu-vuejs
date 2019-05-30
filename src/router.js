//libs
import Vue from "vue";
import Router from "vue-router";

//Components
//-----Parent 1
import Parent1 from "./components/Parent1/";
import Parent1Child1 from "./components/Parent1/Child1";
import Parent1Child2 from "./components/Parent1/Child2";
import Parent1SubChild1 from "./components/Parent1/SubChild1";
import Parent1SubChild2 from "./components/Parent1/SubChild2";
//-----Parent 2
import Parent2 from "./components/Parent2/";
import Parent2Child1 from "./components/Parent2/Child1";
//-----Parent 3
import Parent3 from "./components/Parent3/";

//-----Not Found
import NotFound from "./components/NotFound";
Vue.use(Router);

export default new Router({
  routes: [
    //default route redirection
    { path: "/", redirect: { name: "Parent1" } },
    //not found route redirection
    { path: "*", component: NotFound },
    {
      path: "/parent-1",
      name: "Parent1",
      component: Parent1,
      meta: {
        label: "Parent one"
      },
      children: [
        {
          path: "child-1",
          name: "Child1",
          component: Parent1Child1,
          children: [
            {
              path: "sub-child-1",
              name: "SubChild1",
              component: Parent1SubChild1,
              meta: { label: "Sub child 1", display: false }
            }
          ],
          meta: { label: "child 1" }
        },
        {
          path: "child-2",
          name: "Child2",
          component: Parent1Child2,
          children: [
            {
              path: "sub-child-2",
              name: "SubChild2",
              component: Parent1SubChild2,
              meta: { label: "Sub child 2" }
            }
          ],
          meta: { label: "child 2" }
        }
      ]
    },
    {
      path: "/parent-2",
      name: "Parent2",
      component: Parent2,
      meta: {
        label: "Parent two"
      },

      children: [
        {
          path: "child-1",
          name: "Child21",
          component: Parent2Child1,
          meta: { label: "Child one" }
        }
      ]
    },
    {
      path: "/parent-3",
      name: "Parent3",
      component: Parent3,
      meta: {
        label: "Parent tree"
      }
    },
    {
      path: "/not-found",
      name: "not Found",
      component: NotFound,
      meta: {
        display: false // this attribute i use it to show/hide route in th menu
      }
    }
  ]
});
