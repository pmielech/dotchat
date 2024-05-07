using System.Collections.Concurrent;
using dotchat.Service.Models;

namespace dotchat.Service.DataService;

public class SharedDb
{
    private readonly ConcurrentDictionary<string, UserConnection> _connections = new();

    public ConcurrentDictionary<string, UserConnection> connections => _connections;
}