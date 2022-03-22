import React from "react";
import ReactDOM from "react-dom";

const reactDirective = () => {
  return {
    scope: {
      component: "=",
      props: "="
    },
    link: (scope, element) => {
      const parent = element.parent()[0];
      const containerElement = document.createElement("div");
      parent.appendChild(containerElement);
      scope.$watch(
        "props",
        (newValue) => {
          if (angular.isDefined(newValue)) {
            const Component = scope.component;
            ReactDOM.render(<Component {...scope.props} />, containerElement);
          }
        },
        true
      );
    },
  };
};

export default reactDirective;
