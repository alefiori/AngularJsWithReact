import React from "react";
import ReactDOM from "react-dom";

const reactDirective = () => {
  return {
    scope: {
      component: "=",
      props: "=",
      containerId: "=",
    },
    link: (scope) => {
      const containerElement = document.getElementById(scope.containerId);
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
