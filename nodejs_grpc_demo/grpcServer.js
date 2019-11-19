var PROTO_FILE_PATH = '/Users/zyh/Documents/NodeWorkSpace/grpc_demp/proto/Student.proto'
var grpc = require('grpc')
var grpcService = grpc.load(PROTO_FILE_PATH).com.shengsiyuan.proto;

var server = new grpc.Server()

server.addService(grpcService.StudentService.service, {
    getRealNameByUsername: getRealNameByUsername,
    getStudentsByAge: getStudentsByAge,
    getStudentsWrapperByAges: getStudentsWrapperByAges,
    biTalk:biTalk

})

server.bind('localhost:8899', grpc.ServerCredentials.createInsecure())
server.start()

function getRealNameByUsername(call, callBack) {
    console.log("call: " + call)
    console.log("call: " + call.request.username)
    callBack(null, {realname: '张三'})
}

function getStudentsByAge(call, callBack) {

}

function getStudentsWrapperByAges(call, callBack) {

}

function biTalk(call, callBack) {

}