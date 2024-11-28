import Image from "next/image";
import React from "react";
import Search from "./Search";
import FileUploader from "./FileUploader";
import { signOut } from "@/lib/actions/user.actions";
interface Props {
  userId: string;
  accountId: string;
}

const Header = ({ userId, accountId }: Props) => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logout"
              height={24}
              width={24}
              className="w-6"
            />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
