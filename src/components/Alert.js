import React from "react";

export default function (props) {
  return (
    <div style={{ height: "60px" }}>
      {props.alert && (
        <div>
          <div class={`alert alert-${props.alert.type}`} role="alert">
            <strong>{props.alert.type}</strong> : {props.alert.message}
          </div>
        </div>
      )}
    </div>
  );
}
