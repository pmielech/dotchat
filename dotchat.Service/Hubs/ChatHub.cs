using dotchat.Service.DataService;
using dotchat.Service.Models;
using Microsoft.AspNetCore.SignalR;

namespace dotchat.Service.Hubs;

public class ChatHub : Hub
{
    private readonly SharedDb _shared;

    public ChatHub(SharedDb shared) => _shared = shared;
    public async Task JoinAll(UserConnection user)
    {
        await Clients.All.
            SendAsync("ReceiveMessage", "admin", $"{user.Username}" +
                                                 $" has joined your channel");
    }
    
    public async Task JoinGroup(UserConnection user)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, user.Chatname);

        _shared.connections[Context.ConnectionId] = user;
        await Clients.Group(user.Chatname).
            SendAsync("JoinGroup", "admin", $"{user.Username}" +
                                            $" has joined your channel {user.Chatname} ");
    }

    public async Task SendMessage(string msg)
    {
        Console.WriteLine(msg);
        if (_shared.connections.TryGetValue(Context.ConnectionId, out UserConnection user))
        {
            await Clients.Group(user.Chatname)
                .SendAsync("ReceiveSpecificMessage", user.Username, msg);
        }
    }
    
    
}
