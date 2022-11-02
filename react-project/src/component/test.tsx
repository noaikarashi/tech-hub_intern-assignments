// import React from "react";

// class from extends React.Component {
//   constructor(props:{}) {
//     super(props);
//   };
// }
import React from "react";

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
}

export const TextField: React.FC<Props> = ({ text = "hello", i = 1, ok = true }) => {
    return (
        <div>{text}</div>
  );
};
