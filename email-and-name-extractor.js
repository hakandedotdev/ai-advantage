const submissions = [];
for (const item of $input.all()) {
  const message = item.json.snippet;
  const emailMatch = message.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);

const nameMatch = message.match(/name\s*:\s*(.*?)\s*(?=email\s*:|$)/i);

submissions.push({
  name: nameMatch ? nameMatch[1].trim() : "Customer",
  email: emailMatch ? emailMatch[0] : "",
  case_id: Math.floor(10000 + Math.random() * 90000)
});
}

return submissions;
