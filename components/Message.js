import { useMoralis } from "react-moralis";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div className={`flex items-end space-x-2  relative ${
        isUserMessage && "justify-end"
    }`}>
      <div className={`flex space-x-4 p-3  rounded-lg ${
          isUserMessage?'rounded-br-none bg-pink-300':'rounded-bl-none bg-gray-100'
      } `}>
        <p>{message.get("message")}</p>
      </div>
      <p className="absolute -bottom-5 text-xs italic " >{message.get("username")}</p>
    </div>
  );
}

export default Message;
