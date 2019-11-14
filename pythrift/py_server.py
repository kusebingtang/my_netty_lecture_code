# _*_ coding:utf-8 _*_
__author__ = 'JBW'

from py.thrift.generated import PersonService
from PersonServiceImpl import PersonServiceImpl

from thrift import Thrift
from thrift.transport import TSocket
from thrift.transport import TTransport
from thrift.protocol import TCompactProtocol
from thrift.server import TServer

try:
    personServiceHandle = PersonServiceImpl()

    processor = PersonService.Processor(personServiceHandle)

    serverSocket = TSocket.TServerSocket(port=8899)
    transportFactory = TTransport.TFramedTransportFactory()
    protocolFactory = TCompactProtocol.TCompactProtocolFactory()

    server = TServer.TSimpleServer(processor, serverSocket, transportFactory, protocolFactory)

    print "python thrift server start..."
    server.serve()

except Thrift.TException, tx:
    print '%s' % tx.message
