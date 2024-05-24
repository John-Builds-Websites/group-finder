"use client"

// Needs to be a client function because of hydration errors when using Intl.DateTimeFormat on the server

// utility function to format iso date string to human readable time string

export const formatTime = (isoDate: string) => {
  const date = new Date(isoDate);

  const formattedTime = Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);

  return formattedTime;
};