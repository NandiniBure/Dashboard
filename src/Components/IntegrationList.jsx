import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredData } from "../redux/dashboardSlice";
import {Icon} from "../icon";
const IntegrationList = () => {
  
  const integrations = [
    {
      application: "Stripe",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 4C6.20435 4 5.44129 4.31607 4.87868 4.87868C4.31607 5.44129 4 6.20435 4 7L4 25C4 25.7957 4.31607 26.5587 4.87868 27.1213C5.44129 27.6839 6.20435 28 7 28H25C25.7957 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7957 28 25V7C28 6.20435 27.6839 5.44129 27.1213 4.87868C26.5587 4.31607 25.7957 4 25 4H7ZM16.339 12.0775C15.463 12.0775 14.9335 12.3235 14.9335 12.967C14.9335 13.669 15.844 13.978 16.9735 14.362C18.8155 14.9845 21.2395 15.8065 21.25 18.8515C21.25 21.802 18.886 23.5 15.445 23.5C13.8927 23.4935 12.3576 23.1741 10.9315 22.561V18.637C12.3205 19.396 14.074 19.957 15.4465 19.957C16.372 19.957 17.0335 19.7095 17.0335 18.9505C17.0335 18.1735 16.0465 17.818 14.854 17.389C13.039 16.735 10.75 15.91 10.75 13.165C10.75 10.2475 12.982 8.5 16.339 8.5C17.7419 8.48745 19.1342 8.74461 20.44 9.2575V13.132C19.183 12.457 17.596 12.0775 16.339 12.0775Z"
            fill="#696FFB"
          />
        </svg>
      ),
      rate: 33,
      profit: "$10,998.28",
    },
    {
      application: "Zapier",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 16.0037C19.0005 16.8697 18.8443 17.7285 18.5387 18.5387C17.7285 18.8443 16.8697 19.0006 16.0037 19H15.9955C15.1296 19.0005 14.2707 18.8443 13.4605 18.5387C13.1553 17.7284 12.999 16.8696 12.9992 16.0037V15.9955C12.9992 15.1015 13.1635 14.2495 13.4605 13.4605C14.2707 13.155 15.1296 12.9987 15.9955 12.9992H16.0037C16.8977 12.9992 17.7535 13.1635 18.5387 13.4605C18.8443 14.2707 19.0005 15.1296 19 15.9955V16.0037ZM27.8357 13.9998H20.8277L25.777 9.04675C25.3895 8.50126 24.957 7.98922 24.484 7.516C24.011 7.04162 23.4989 6.60784 22.9532 6.21925L18.0002 11.1685V4.16425C17.3403 4.05745 16.673 4.00253 16.0045 4H15.9925C15.3122 4 14.6485 4.06225 14.0005 4.16425V11.1722L9.05125 6.223C8.50166 6.60696 7.98783 7.03971 7.516 7.516C7.04036 7.98785 6.60648 8.50001 6.21925 9.04675L11.1685 13.9998H4.16425C4.16425 13.9998 4 15.316 4 15.9955V16.0037C4 16.684 4.06225 17.3515 4.16425 17.9995H11.1722L6.223 22.9487C6.9969 24.046 7.95176 25.0037 9.04675 25.7808L13.9997 20.8315V27.8358C14.6477 27.9408 15.3115 28 15.9917 28H16.0075C16.6877 28 17.3515 27.9408 17.9995 27.8358V20.8315L22.9487 25.7808C23.5 25.4058 24.0115 24.9685 24.4795 24.4915H24.4832C24.961 24.0216 25.3951 23.5093 25.78 22.9608L20.8307 18.0115H27.835C27.94 17.3665 27.9992 16.7065 27.9992 16.0308V16C27.9992 15.3197 27.94 14.656 27.835 14.0118L27.8357 13.9998Z"
            fill="#FF3200"
          />
        </svg>
      ),
      type: "CRM",
      rate: 27,
      profit: "$8,998.59",
    },
    {
      application: "Shopify",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.8648 8.71294C23.8483 8.59294 23.7432 8.52653 23.6563 8.51921C23.0157 8.47107 22.3751 8.42332 21.7344 8.37595C21.7344 8.37595 20.4599 7.11061 20.32 6.97055C20.18 6.83058 19.9067 6.87316 19.8005 6.90439C19.7849 6.90899 19.5221 6.99011 19.0873 7.12466C18.6615 5.89951 17.9101 4.77365 16.5882 4.77365C16.5518 4.77365 16.5142 4.77513 16.4766 4.77727C16.1007 4.28009 15.635 4.06409 15.2327 4.06409C12.1534 4.06409 10.6823 7.91354 10.221 9.8697C9.02446 10.2405 8.17444 10.5041 8.06586 10.5382C7.39797 10.7477 7.37685 10.7687 7.28915 11.3981C7.22315 11.8745 5.47559 25.3892 5.47559 25.3892L19.093 27.9406L26.4713 26.3445C26.4713 26.3445 23.8811 8.83294 23.8648 8.71294Z"
            fill="#95BF46"
          />
        </svg>
      ),
      type: "Marketplace",
      rate: 40,
      profit: "$13,331.24",
    },
  ];

  const filteredData = useSelector(selectFilteredData);


  return (
    <div className="bg-white w-full h-[13rem] dark:bg-[#1F214A] border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4">
      {/* Header */}
      <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">
        List of Integration
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto border-collapse">
          <thead>
            <tr className="text-gray-600 dark:text-gray-400">
              <th className="px-2 py-1">Application</th>
              <th className="px-2 py-1">Type</th>
              <th className="px-2 py-1">Rate</th>
              <th className="px-2 py-1">Profit</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.integrations?.map((integration, index) => (
              <tr
                key={index}
                className="border-t border-gray-300 dark:border-gray-700"
              >
                {/* Application */}
                <td className="px-2 py-1 flex items-center space-x-2">
                  <div className="w-6 h-6 mb-1"><Icon svg={integration.icon}></Icon></div>
                  <span className="text-gray-900 dark:text-white font-medium">
                    {integration.application}
                  </span>
                </td>

                {/* Type */}
                <td className="px-2 py-1 text-gray-600 dark:text-gray-400">
                  {integration.type}
                </td>

                {/* Rate */}
                <td className="px-2 py-1">
                  <div className="flex items-center space-x-1">
                    <div className="relative w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div
                        className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full"
                        style={{ width: `${integration.rate}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-900 dark:text-white text-xs">
                      {integration.rate}%
                    </span>
                  </div>
                </td>

                {/* Profit */}
                <td className="px-2 py-1 text-gray-900 dark:text-white font-medium">
                  {integration.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IntegrationList;
