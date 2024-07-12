// utility function to format iso date string to human readable time string

export const formatTime = (isoDate: string) => {
	const date = new Date(isoDate);

	const locales: Intl.LocalesArgument = ["en-GB"];
	const options: Intl.DateTimeFormatOptions = {
		hour: "numeric",
		minute: "numeric",
    timeZone: "GB",
    hourCycle: "h12",
	};

	const formattedTime = date.toLocaleTimeString(locales, options);

  return formattedTime;
};
