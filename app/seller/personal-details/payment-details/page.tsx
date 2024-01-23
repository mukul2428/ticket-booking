"use client";
import DisplayEventImage from "@/app/ui/displayEventImage";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { bankInfoInputs } from "@/app/types";
import { setBankInfo } from "@/app/state/userData/sellTicketsSlice";
import { RootState } from "@/app/state/store";
import { setAllEventData } from "@/app/state/userData/allEventDataSlice";
import { v4 as uuidv4 } from "uuid";

const PaymentDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<bankInfoInputs>();
  const sellTicketsData = useSelector((state: RootState) => state.sellTickets);

  const onSubmit: SubmitHandler<bankInfoInputs> = (data) => {
    dispatch(
      setBankInfo({
        cardOwner: data.cardOwner,
        cardType: data.cardType,
        cardNumber: data.cardNumber,
        month: data.month,
        year: data.year,
        cvv: data.cvv,
        accountOwner: data.accountOwner,
        iban: data.iban,
        bic: data.bic,
        myApporval: data.myApporval,
      })
    );
    dispatch(setAllEventData({...sellTicketsData, id: uuidv4()}));
    router.push(
      "/seller/display-tickets"
    );
  };
  return (
    <>
      <DisplayEventImage />
      <form
        className="flex flex-col p-10 m-10 w-3/5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row">
          <span className="text-3xl font-bold">Guarantor</span>
          <span className="text-3xl font-bold text-orange-600 mx-2">
            Credit Card
          </span>
        </div>
        <div className="mt-1 flex flex-col">
          <label className="font-semibold">Card Owner</label>
          <input
            type="text"
            className="common-input"
            placeholder="Card Owner"
          />
        </div>
        <div className="mt-6 flex flex-col">
          <div className="flex flex-col">
            <label className="font-semibold">Card Type</label>
            <input
              type="text"
              className="common-input"
              placeholder="Card Type"
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label className="font-semibold">Card Number</label>
            <input
              type="text"
              className="common-input"
              placeholder="Card Number"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-row">
          <div className="mr-4 flex flex-col">
            <label className="font-semibold">Month</label>
            <input type="text" className="common-input" placeholder="Month" />
          </div>
          <div className="ml-4 flex flex-col">
            <label className="font-semibold">Year</label>
            <input type="text" className="common-input" placeholder="Year" />
          </div>
          <div className="ml-4 flex flex-col">
            <label className="font-semibold">CVC/CVV</label>
            <input type="text" className="common-input" placeholder="CVC/CVV" />
          </div>
        </div>
        <div className="mt-6 flex flex-row">
          <span className="text-3xl font-bold">Account</span>
          <span className="text-3xl font-bold text-orange-600 mx-2">
            Information
          </span>
        </div>
        <div className="mt-1 flex flex-col">
          <label className="font-semibold">Account Owner</label>
          <input
            type="text"
            className="common-input"
            placeholder="Account Owner"
          />
        </div>
        <div className="mt-6 flex flex-col">
          <div className="flex flex-col">
            <label className="font-semibold">IBAN</label>
            <input type="text" className="common-input" placeholder="IBAN" />
          </div>
          <div className="mt-4 flex flex-col">
            <label className="font-semibold">
              BIC, SWIFT, ABA, RTN (** TR account holders do not need to fill in
              this field.)
            </label>
            <input type="text" className="common-input" placeholder="0000" />
          </div>
        </div>
        <div className="mt-6 flex flex-row">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-orange-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
            <span className="mx-6 text-sm text-gray-400 whitespace-nowrap">
              I give my express informed consent to the processing and sharing
              of the matters set out in the Personal Data Policy Information
              Text, and I hereby approve.
            </span>
          </label>
        </div>
        <div className="mt-6 overflow-y-auto max-h-40 border rounded-lg border-gray-500 p-4">
          <p>
            Please read the terms and conditions carefully. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam. Please read the terms and
            conditions carefully. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
            dapibus diam. Please read the terms and conditions carefully. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam. Please read the terms
            and conditions carefully. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
            dapibus diam. Please read the terms and conditions carefully. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <button
          type="submit"
          className="mt-4 p-2 text-white bg-orange-600 hover:bg-orange-800 rounded-lg"
        >
          Publish
        </button>
      </form>
    </>
  );
};

export default PaymentDetails;
