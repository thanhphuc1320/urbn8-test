async function callApis() { let apiResult = await api(); let api2Result = await api2(apiResult); let api3Result = await api3(api2Result); return api3Result;
}