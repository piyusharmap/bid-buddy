import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import { Button } from "../ui/button";

type ModalProps = {
	children?: React.ReactNode;
	setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, setModal }) => {
	return (
		<div className="fixed left-0 top-0 flex h-full w-full justify-center bg-primary-light/65 backdrop-blur-sm z-50">
			<div className="px-5 py-4 w-full items-start self-end sm:max-w-md sm:self-center bg-background rounded-lg drop-shadow-xl">
				<div className="w-full flex justify-between items-center">
					<Image
						src="./bb_logo.svg"
						alt="BidBuddy"
						width="30"
						height="30"
					/>

					<Button
						variant="destructive"
						onClick={() => setModal(false)}
					>
						Close
					</Button>
				</div>

				<div className="mt-8 flex max-h-[60vh] sm:max-h-[80vh] w-full flex-col gap-4 overflow-auto rounded-lg bg-background transition-all sm:min-h-[300px] sm:self-center">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
